import { Box, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { useFaded } from './hooks'
import { PageContainer, PageContainerProps } from './layout'

export type HowItWorksProps = {
    heading?: ReactNode
    subheading?: ReactNode
    steps: StepProps[]
    animate?: any
} & PageContainerProps

export type StepProps = {
    heading?: ReactNode
    decorativeHeading?: ReactNode
    subheading?: ReactNode
    image?: ReactNode
    animate?: any
}

export function HowItWorks({
    heading,
    subheading,
    steps,
    animate = undefined,
    ...rest
}: HowItWorksProps) {
    const { Faded } = useFaded({ animate })
    return (
        <PageContainer spacing='40px' py='120px' {...rest}>
            <Stack
                as={Faded}
                spacing='40px'
                flex='1'
                textAlign='center'
                align='center'
            >
                <Heading
                    lineHeight='50px'
                    // fontWeight='medium'
                >
                    {heading}
                </Heading>
                <Subheading maxW='700px'>{subheading}</Subheading>
            </Stack>
            {/* <Box mt='60px' /> */}
            <Stack align='stretch' spacing='60px' flex='1'>
                {steps.map((step, i) => (
                    <Step
                        key={i}
                        animate={animate}
                        number={i + 1}
                        flip={i % 2 !== 0}
                        {...step}
                    />
                ))}
            </Stack>
        </PageContainer>
    )
}

const Step = ({
    heading,
    subheading,
    number,
    image,
    decorativeHeading,
    flip = false,
    animate = undefined,
    ...rest
}: StepProps & { number; flip }) => {
    const { Faded } = useFaded({ animate })
    return (
        <Stack
            justify='space-between'
            align='center'
            direction={['column', null, flip ? 'row-reverse' : 'row']}
            spacing='40px'
            {...rest}
        >
            <Stack as={Faded} minW='300px' maxW='500px' flex='1' spacing='40px'>
                <Stack direction='row' align='flex-end' opacity={0.3}>
                    <Box opacity={0.5} lineHeight='60px' fontSize='80px'>
                        {number}
                    </Box>
                    <Heading
                        isTruncated
                        maxW='300px'
                        fontWeight='bold'
                        fontSize='text'
                    >
                        <Box d='inline' mx='0.6em' children={' . '} />
                        {decorativeHeading || heading}
                    </Heading>
                </Stack>
                <Subheading opacity={0.8} fontWeight='medium'>
                    {heading}
                </Subheading>

                <Box
                    maxW='400px'
                    fontWeight='medium'
                    lineHeight='1.8em'
                    opacity={0.5}
                    fontSize='subtext'
                >
                    {subheading}
                </Box>
            </Stack>
            <Box as={Faded} minW='300px' maxW='500px' flex='1'>
                {image}
            </Box>
        </Stack>
    )
}
