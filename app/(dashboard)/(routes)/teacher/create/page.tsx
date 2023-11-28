"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"



const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    })
})
export default function CreatePage() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    })

    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await axios.post("/api/courses", values)
            router.push(`/teacher/courses/${res.data.id}`)
        } catch (error) {
            toast.error("someThing went wrong")
        }
    }
    return (
        <>
            <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
                <div className="">
                    <h1 className="text-2xl">
                        Name your Course
                    </h1>
                    <p className="text-sm text-slate-600">
                        what whould you like to name your course? don&apo;t
                        worry, you canchage it later
                    </p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                            <FormField control={form.control} name="title" render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="eg: 'Advance web developement course!'"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        what will you teach in this course
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <div className="flex items-center gap-x-2">
                                <Link href={"/"}>
                                    <Button type="button" variant={"ghost"}>
                                        Cancel
                                    </Button>
                                </Link>
                                <Button
                                    type="submit" disabled={!isValid || isSubmitting}>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}
