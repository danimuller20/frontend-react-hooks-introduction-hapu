import { Component } from 'react';

import { Profile } from '../profile';

import style from './secondSection.module.css';

import profile1 from '../../resources/profile1.jpeg';
import profile2 from '../../resources/profile2.jpeg';

export const SecondSection = () => {
  const firstProfileList = [
    'Set the rates in partnership with your nanny',
    'Be found by local families on the Hapu map',
    'Easily connect and chat with new sharers',
    'Protect your incomings with 2 weeks notice for cancellations',
    'Process late fees at the click of a button',
  ];
  const secondProfileList = [
    'You set up and manage the nanny share on behalf of your host family',
    'You set the rates',
    'Protect your income with 2 weeks notice for cancellations',
    'Process late fees at the click of a button',
  ];
  return (
    <section className={style.profileContainer}>
      <Profile
        avatar={profile1}
        title="Parents"
        profileComment="“I have a fantastic home, a fantastic nanny and I want to reduce my costs!”"
        description="Your home and a great relationship with your nanny is an asset you can leverage to significantly reduce your childcare costs."
        list={firstProfileList}
      />
      <Profile
        avatar={profile2}
        title="Nannies"
        profileComment="“I work for a great family in a great home and I want to increase my income and control!”"
        description="Now you can partner with your existing family and employer to reduce their costs and increase your pay. All the while gaining a new level of control that ensures any share arrangement is as beneficial to you as to the families involved. You start the share, you run the share."
        list={secondProfileList}
      />
    </section>
  );
};
