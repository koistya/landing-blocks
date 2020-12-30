import { Heading as H, HeadingProps } from '@chakra-ui/react'
import React, { Fragment } from 'react'

export function Subheading(props: HeadingProps) {
    if (!props.children) {
        return <Fragment />
    }
    const as = typeof props.children === 'string' ? 'h2' : 'span'
    return (
        <H
            as={as}
            //
            opacity={0.64}
            fontWeight='medium'
            lineHeight='1.4em'
            fontSize='subheading'
            {...props}
        />
    )
}



