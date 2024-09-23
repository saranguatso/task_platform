'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'

import User from "@/lib/database/models/user.model"
import Task from "@/lib/database/models/task.model"
import Category from "@/lib/database/models/category.model"
import { handleError } from '@/lib/utils'

import { CreateTaskParams } from "@/types"

const getCategoryByName = async (name: string) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } })
  }
  
const populateEvent = async (query: any) => {
    return query
      .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
      .populate({ path: 'category', model: Category, select: '_id name' })
  } 

  //Create a task
export const createTask = async({ task, userId, path }: CreateTaskParams) => {
        try {
            console.log('Creating task');
            await connectToDatabase();
            console.log({userId});

            const organizer = await User.findById(userId);

            if(!organizer) {
                throw new Error('Organizer not found');
            }

            console.log({
                categoryId: task.categoryId,
                organizerId: userId,
            })

            const newTask = await Task.create({ 
                ...task, 
                category: task.categoryId,  
                organizer: userId
            });

            revalidatePath(path);

            return JSON.parse(JSON.stringify(newTask));

        } catch (error) {
            console.log(error);
            handleError(error);
        }        
    }

    export const getTaskById =  async (taskId:string) => {
        try {
            await connectToDatabase();

            const task =  await populateEvent(Task.findById(taskId));

            if(!task) {
                throw new Error('Task not found');
            }

            return JSON.parse(JSON.stringify(task));

        } catch (error) {
            handleError(error);
        }
    }