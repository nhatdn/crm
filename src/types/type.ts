import React from 'react';

export type IPropsWithChildren = {
    children: React.ReactNode | React.ReactNode[]
    fallbackError: React.ReactNode | React.ReactNode[]
}