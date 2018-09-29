// import { createSelector } from 'reselect';

export const getUserSelector = state => state.account.getUser;

export const getAccountSelector = state => state.authentication.getUser.account;
