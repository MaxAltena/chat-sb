import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Conversation } from '@/types/chat';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function Navbar({
  selectedConversation,
  onNewConversation,
}: {
  selectedConversation: Conversation;
  onNewConversation: () => void;
}) {
  return (
    <nav className="flex w-full justify-between bg-[#202123] py-3 px-4">
      <div className="mr-4"></div>

      <div className="max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap">
        {selectedConversation.name}
      </div>

      <FontAwesomeIcon
        icon={faPlus}
        className="cursor-pointer hover:text-neutral-400 mr-8"
        onClick={onNewConversation}
      />
    </nav>
  );
}
