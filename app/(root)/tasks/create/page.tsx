import TaskForm from "@/components/shared/TaskForm"
import { auth } from "@clerk/nextjs";

const CreateTask = () => {
    
    const { sessionClaims} =  auth();

    const userId = sessionClaims?.userId as string;

  return (
    <>
        <section className="bg-primary-50  bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
            <h3 className="wrapper h3-bold text-center sm:text-left">Create Task</h3>
        </section>

        <div className="wrapper my-8">
            <TaskForm userId ={userId} type="Create"/>
        </div>
    </>
  )
}

export default CreateTask