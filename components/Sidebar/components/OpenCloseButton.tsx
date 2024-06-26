import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

type SidebarButtonProps = {
  onClick: VoidFunction;
  side: 'left' | 'right';
};

export function CloseSidebarButton({ onClick, side }: SidebarButtonProps) {
  return (
    <>
      <button
        className={`fixed top-5 ${
          side === 'right' ? 'right-[270px]' : 'left-[270px]'
        } z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${
          side === 'right' ? 'right-[270px]' : 'left-[270px]'
        } sm:h-8 sm:w-8 sm:text-neutral-700`}
        onClick={onClick}
      >
        {side === 'right' ? (
          <FontAwesomeIcon icon={faAnglesRight} />
        ) : (
          <FontAwesomeIcon icon={faAnglesLeft} />
        )}
      </button>
      <div
        onClick={onClick}
        className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"
      ></div>
    </>
  );
}

export const OpenSidebarButton = ({ onClick, side }: SidebarButtonProps) => {
  return (
    <button
      className={`fixed top-2.5 ${
        side === 'right' ? 'right-2' : 'left-2'
      } z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${
        side === 'right' ? 'right-2' : 'left-2'
      } sm:h-8 sm:w-8 sm:text-neutral-700`}
      onClick={onClick}
    >
      {side === 'right' ? (
        <FontAwesomeIcon icon={faAnglesLeft} />
      ) : (
        <FontAwesomeIcon icon={faAnglesRight} />
      )}
    </button>
  );
};
