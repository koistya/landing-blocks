import { Heading as H, HeadingProps, Stack, Box } from '@chakra-ui/core'
import React, { FC } from 'react'
import { Col, Row, Heading, Spacer, PageContainer } from '.'
import { Text } from '@chakra-ui/core'

export const Feature = ({
    heading,
    subhead,
    image,
    flip = false,
    backgroundColor = 'transparent',
    ...rest
}) => {
    const dir = flip ? 'row-reverse' : 'row'
    return (
        <PageContainer py='120px' bg={backgroundColor} {...rest}>
            <Stack spacing='40px' flexDir={dir} flexWrap='wrap'>
                <Stack spacing={8} flex='1' minW='400px'>
                    <Heading
                        lineHeight='50px'
                        fontWeight='medium'
                        fontSize='36px'
                    >
                        {heading}
                    </Heading>
                    <Text
                        lineHeight='34px'
                        m={0}
                        opacity={0.6}
                        fontWeight='normal'
                        fontSize='18px'
                    >
                        {subhead}
                    </Text>
                </Stack>

                <Col align='center' flex='1' minW='400px'>
                    {image}
                </Col>
            </Stack>
        </PageContainer>
    )
}
