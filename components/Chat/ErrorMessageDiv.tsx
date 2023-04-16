import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ErrorMessage } from '@/types/error';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function ErrorMessageDiv({ error }: { error: ErrorMessage }) {
  return (
    <div className="mx-6 flex h-full flex-col items-center justify-center text-red-500">
      <div className="mb-5">
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <div className="mb-3 text-2xl font-medium">{error.title}</div>
      {error.messageLines.map((line, index) => (
        <div key={index} className="text-center">
          {' '}
          {line}{' '}
        </div>
      ))}
      <div className="mt-4 text-xs opacity-50 dark:text-red-400">
        {error.code ? <i>Code: {error.code}</i> : ''}
      </div>
    </div>
  );
}
