'use client';

import { CustomButtonProps } from "@/types";

function CustomButton({title, containerStyles, handleClick}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button'}
      className={'custom-btn'}
      onClick={() => { }}
    >
      <span className={'flex-1'}>
        
      </span>
    </button>
  );
}

export default CustomButton;