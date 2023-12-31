import { Button } from "@/components/ui/button";
import { inputAtom } from "@/lib/hooks/use-chat";
import { useSetAtom } from "jotai";

interface AnnouncementProps {
  announcements?: string[];
  title?: string;
  chatRef?: React.RefObject<HTMLTextAreaElement>;
}

const Announcement = ({
  announcements = [],
  title = "ChatUI",
  chatRef,
}: AnnouncementProps) => {
  const setInput = useSetAtom(inputAtom);

  return (
    <div className="flex h-full items-center prose prose-2xl animate-emerge">
      <div className="flex w-full flex-col items-center dark:text-white">
        <h1 className="w-3/4 text-center font-bold text-stone-400 dark:text-stone-600 m-2">
          {title}
        </h1>
        <div className="flex w-3/4 flex-wrap gap-2 justify-center dark:text-stone-600">
          {announcements.map(t => {
            return (
              <Button
                key={t}
                onClick={() => {
                  setInput(t);
                  if (chatRef) {
                    chatRef.current!.focus();
                  }
                }}
                className="rounded-full hover:bg-green-300 dark:hover:bg-orange-700"
                variant="outline"
              >
                {t}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
