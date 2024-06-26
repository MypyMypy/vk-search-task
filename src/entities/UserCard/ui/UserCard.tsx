import './style.css';
import { forwardRef } from 'react';
import type { UserDataI } from '@/shared/api/types';

type UserCardPropsI = UserDataI & {
  ref?: React.RefObject<HTMLDivElement>;
};

export const UserCard = forwardRef<HTMLDivElement, UserCardPropsI>(
  (props, ref) => {
    return (
      <div className="userCard" ref={ref}>
        <img className="userPic" src={props.image} />
        <div className="userInfo">
          <div>{`${props.firstName} ${props.lastName}`}</div>
          <div>{props.address.city}</div>
        </div>
      </div>
    );
  }
);

UserCard.displayName = 'UserCard';
