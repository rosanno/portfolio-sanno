"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(2).max(300),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 space-y-2.5"
      >
        <div className="flex items-center gap-x-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="bg-[#F7F7F7] dark:bg-[#2C2C2C] py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="bg-[#F7F7F7] dark:bg-[#2C2C2C] py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Email"
                  {...field}
                  className="bg-[#F7F7F7] dark:bg-[#2C2C2C]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full h-12" variant="dark">
          Submit Inquiry
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
