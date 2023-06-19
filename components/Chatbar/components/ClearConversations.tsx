import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { SidebarButton } from '@/components/Sidebar/SidebarButton';

import {
  faCheck,
  faCommentSlash,
  faTrash,
  faX,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  onClearConversations: () => void;
}

export const ClearConversations: FC<Props> = ({ onClearConversations }) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const { t } = useTranslation('sidebar');

  const handleClearConversations = () => {
    onClearConversations();
    setIsConfirming(false);
  };

  return isConfirming ? (
    <div className="flex w-full cursor-pointer items-center rounded-lg py-3 px-3 hover:bg-gray-500/10">
      <FontAwesomeIcon icon={faTrash} />

      <div className="ml-3 flex-1 text-left text-[12.5px] leading-3 text-white">
        {t('Are you sure?')}
      </div>

      <div className="flex w-[40px]">
        <FontAwesomeIcon
          icon={faCheck}
          className="ml-auto mr-1 min-w-[20px] text-neutral-400 hover:text-neutral-100"
          onClick={(e) => {
            e.stopPropagation();
            handleClearConversations();
          }}
        />

        <FontAwesomeIcon
          icon={faX}
          className="ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100"
          onClick={(e) => {
            e.stopPropagation();
            setIsConfirming(false);
          }}
        />
      </div>
    </div>
  ) : (
    <SidebarButton
      text={t('Clear conversations')}
      icon={<FontAwesomeIcon icon={faCommentSlash} />}
      onClick={() => setIsConfirming(true)}
    />
  );
};
