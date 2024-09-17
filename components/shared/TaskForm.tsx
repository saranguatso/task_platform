"use client"

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


type TaskFormPromps = {
    userId: string;
    type: "Create" | "Update"
}

const TaskForm = ({userId, type}:  TaskFormPromps) => {

    const  initialValues = taskDefaultValues;

  // 1. Define your form.
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof taskFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

        <div className="flex flex-col  gap-5  md:flex-row">
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
        </div>
      
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default TaskForm