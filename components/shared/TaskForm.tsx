"use client"

import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { taskFormSchema } from "@/lib/validator"
import { z } from "zod"
import { taskDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "./FileUpload"
import { useState } from "react"
import DatePicker from "react-datepicker";
import { Checkbox } from "@/components/ui/checkbox"
import { useUploadThing as uploadThing } from "@/lib/uploadthing";

import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation"
import { createTask } from "@/lib/actions/task.actions"

type TaskFormPromps = {
    userId: string;
    type: "Create" | "Update"
}

const TaskForm = ({userId, type}:  TaskFormPromps) => {

    const [files, setFiles] = useState<File[]>([]);
    const  initialValues = taskDefaultValues;
    const router = useRouter();

    const { startUpload } = uploadThing('imageUploader');
    
  // 1. Define your form.
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof taskFormSchema>) {
    const taskData = values;

    let uploadedImageUrl = values.imageUrl;

    if(files.length > 0) {
        const uploadedImages = await startUpload(files);

        if(!uploadedImages) {
            return;
        }

        uploadedImageUrl = uploadedImages[0].url;
    }

    if(type === 'Create') {
        try {
          const newTask = await createTask({
            task: { ...values, imageUrl: uploadedImageUrl },
            userId,
            path: '/profile'
          })
  
          if(newTask) {
            form.reset();
            router.push(`/tasks/${newTask._id}`)
          }
        } catch (error) {
          console.log(error);
        }
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem className="w-full">
                
                <FormControl>
                    <Input placeholder="Task title" {...field} className="input-field"/>
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
                <FormItem className="w-full">
                
                <FormControl>
                    <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
      
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl className="h-72">
                        <Textarea placeholder="Description" {...field} 
                        className="textarea rounded-2xl"
                        />
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl className="h-32">
                        <FileUpload onFieldChange={field.onChange}
                        imageUrl={field.value} setFiles={setFiles}
                        />
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
                        )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full  bg-gray-50 px-4  py-2">
                            <Image 
                            src="/assets/icons/location-grey.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            />
                            
                            <Input placeholder="Prefered meeting location: In person or Online" {...field} className="input-field"/>
                        </div>
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
            )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="startDateTime"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full  bg-gray-50 px-4  py-2">
                            <Image 
                            src="/assets/icons/calendar.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            className="filter-grey"
                            />
                            <p className="ml-3 whitespace-nowrap text-grey-600">
                                Start Date:
                            </p>

                            <DatePicker 
                              selected={field.value} 
                              onChange={(date: Date | null) => field.onChange(date)} 
                              showTimeSelect
                              timeInputLabel="Time:"
                              dateFormat={"MM/dd/yyyy h:mm aa"}
                              wrapperClassName="datePicker"
                            />
                        </div>
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
            )}
            />
       
            <FormField
                control={form.control}
                name="endDateTime"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full  bg-gray-50 px-4  py-2">
                            <Image 
                            src="/assets/icons/calendar.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            className="filter-grey"
                            />
                            <p className="ml-3 whitespace-nowrap text-grey-600">
                                End Date:
                            </p>

                            <DatePicker 
                              selected={field.value} 
                              onChange={(date: Date | null) => field.onChange(date)} 
                              showTimeSelect
                              timeInputLabel="Time:"
                              dateFormat={"MM/dd/yyyy h:mm aa"}
                              wrapperClassName="datePicker"
                            />
                        </div>
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
            )}
            />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full  bg-gray-50 px-4  py-2">
                            <Image 
                            src="/assets/icons/dollar.svg"
                            alt="dollar"
                            width={24}
                            height={24}
                            className="filter-grey"
                            />
                            <p className="ml-3 whitespace-nowrap text-grey-600">
                                Price (SEK):
                            </p>

                            <Input type="number" placeholder="Price" {...field} className="p-regular-16 border-0 bg-gray-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"/>

                            <FormField
                                control={form.control}
                                name="isFree"
                                render={({ field }) => (
                                    <FormItem>
                                    
                                    <FormControl>
                                        <div className="flex items-center">
                                            <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Task</label>
                                            <Checkbox 
                                            onCheckedChange={field.onChange}
                                            checked={field.value}
                                            id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500"/>
                                        </div>
                                    </FormControl>
                                    
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
                )}
                />
            
            <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                    <FormItem className="w-full">
                    
                    <FormControl>
                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full  bg-gray-50 px-4  py-2">
                            <Image 
                            src="/assets/icons/link.svg"
                            alt="calendar"
                            width={24}
                            height={24}
                            />
                            
                            <Input placeholder="URL" {...field} className="input-field"/>
                        </div>
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
            )}
            />
            
        </div>
        
        <Button 
        type="submit"
        size="lg"
        disabled={form.formState.isSubmitting}
        className="bg-primary-500 button col-span-2 w-full"
        >
            {form.formState.isSubmitting ? (
            'Submitting...'
            ) : 
            `${type} Task`
            }
        </Button>

      </form>
    </Form>
  )
}

export default TaskForm

function useUploadThing(arg0: string): { startUpload: any } {
    throw new Error("Function not implemented.")
}
