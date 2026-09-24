/** Своё демо Risinka: официальное shadcn/ui собрано на AI SDK сайта, у библиотеки его нет. */
import { ArrowUpIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const TURNS = [
  { from: "user", text: "I'm building a chat for our app and the scroll behavior is driving me nuts. Every time the AI streams a reply, the whole thread jumps around." },
  { from: "assistant", text: "That's the classic streaming scroll problem. Wrap your message list in MessageScroller and turn on autoScroll — the viewport pins to the bottom as tokens arrive." },
  { from: "user", text: "And if they've scrolled up to re-read an older answer? I don't want to yank them back down." },
  { from: "assistant", text: "You won't. Auto-scroll only runs when the viewport is already pinned to the bottom, so scrolling up is a deliberate opt-out." },
] as const

/** Разговор в прокрутке: сообщения пользователя справа, ответы слева. */
export function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <Card className="mx-auto h-120 w-full max-w-sm gap-0">
        <CardHeader className="gap-1 border-b">
          <CardTitle>New Chat</CardTitle>
          <CardDescription>How can I help you today?</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent className="flex flex-col gap-4 p-(--card-spacing)">
                {TURNS.map((turn, index) => (
                  <Message key={index} align={turn.from === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble variant={turn.from === "user" ? "default" : "muted"}>
                        <BubbleContent>{turn.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t">
          <span className="mr-auto text-sm text-muted-foreground">Last one — does this work with assistive tech?</span>
          <Button size="icon-sm" aria-label="Send">
            <ArrowUpIcon />
          </Button>
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  )
}
