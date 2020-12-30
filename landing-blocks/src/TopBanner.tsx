import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Bullet } from './Bullet'
import { PageContainer, PageContainerProps } from './layout'

export type TopBannerProps = {
    heading?: ReactNode
    cta?: ReactNode
    bullet?: ReactNode
} & PageContainerProps

export function TopBanner({
    heading = '',
    cta = '',
    bullet = '',
    ...rest
}: TopBannerProps) {
    return (
        <PageContainer py='10px' {...rest}>
            <Stack
                alignSelf='center'
                spacing='10px'
                direction='row'
                align='center'
                justify='center'
            >
                <Bullet>{bullet}</Bullet>
                <Box>{heading}</Box>
                <Box>{cta}</Box>
            </Stack>
        </PageContainer>
    )
}
