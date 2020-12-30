import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Bullet } from './Bullet'
import { Heading } from './Heading'
import { useFaded } from './hooks'
import { Col, PageContainer, PageContainerProps } from './layout'
import { Subheading } from './Subheading'
import { clone } from './support'

export type FeatureProps = {
    heading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
    cta?: ReactNode
    bullet?: ReactNode
    flip?: boolean
    animate?: any
} & PageContainerProps

export function Feature({
    heading,
    subheading,
    bullet = '',
    image = null as any,
    flip = false,
    cta = '',
    animate = undefined,
    direction = 'row',
    ...rest
}: FeatureProps) {
    const dir: any = (direction) => (flip ? `${direction}-reverse` : direction)
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer py='80px' {...rest}>
            <Stack
                align='center'
                // spacing='40px'
                justifyItems='space-between'
                // isReversed={flip}
                direction={['column', null, dir(direction)]}
            >
                <Stack as={Faded} spacing='30px' flex='1' minW='300px'>
                    {bullet && <Bullet my='10px'>{bullet}</Bullet>}
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='heading'
                    >
                        {heading}
                    </Heading>
                    <Subheading
                        lineHeight='34px'
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='text'
                    >
                        {subheading}
                    </Subheading>
                    {cta && <Box>{clone(cta)}</Box>}
                </Stack>
                <Box minW='40px' minH='40px' />
                <Col as={Faded} align='center' flex='1' minW='300px'>
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}
