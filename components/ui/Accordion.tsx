"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import type { ReactNode } from "react";
import { IconWrapper } from "@/components/ui/IconWrapper";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultValue?: string;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export function Accordion({
  items,
  type = "single",
  defaultValue,
  className = "",
  itemClassName = "border-border-muted",
  triggerClassName = "text-subhead font-normal text-text-primary",
  contentClassName = "text-text-primary/90",
}: AccordionProps) {
  const rootProps =
    type === "multiple"
      ? {
          type: "multiple" as const,
          defaultValue: defaultValue ? [defaultValue] : undefined,
        }
      : {
          type: "single" as const,
          collapsible: true,
          defaultValue,
        };

  return (
    <AccordionPrimitive.Root
      {...rootProps}
      className={`flex w-full flex-col gap-3 ${className}`}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className={`overflow-hidden rounded-lg border ${itemClassName}`}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={`group flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left outline-none ${triggerClassName}`}
            >
              <span>{item.title}</span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/40">
                <IconWrapper
                  name="chevron-down"
                  size={16}
                  className="transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
                />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div
              className={`px-4 pb-4 text-body-lg leading-relaxed ${contentClassName}`}
            >
              {item.content}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
