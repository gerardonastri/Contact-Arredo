"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Star } from 'lucide-react'
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
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
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  review: z.string().min(10, {
    message: "Review must be at least 10 characters.",
  }),
  rating: z.number().min(1).max(5),
})

export default function ReviewForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      review: "",
      rating: 5,
    },
  })

  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(5)

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the data to your backend
    console.log(values)
    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your experience.",
      action: <ToastAction altText="Chiudi">Chiudi</ToastAction>,
    })
    form.reset()
    setSelectedRating(5)
  }

  return (
    <div className="max-w-[600px] mx-auto p-8 bg-white shadow-lg rounded-xl">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Leave a Review</h2>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="bg-gray-50 p-6 rounded-lg">
              <FormLabel className="text-lg mb-2 block">Rating</FormLabel>
              <FormControl>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="focus:outline-none transition-transform hover:scale-110"
                      onMouseEnter={() => setHoveredRating(rating)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => {
                        setSelectedRating(rating)
                        field.onChange(rating)
                      }}
                    >
                      <Star
                        className={`w-10 h-10 ${
                          rating <= (hoveredRating || selectedRating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="mt-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition" />
              </FormControl>
              <FormDescription className="text-sm text-gray-500 mt-1">
                This is how your name will appear with your review.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience..."
                  className="min-h-[150px] mt-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full py-3 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit Review
        </Button>
      </form>
    </Form>
  </div>
  )
}