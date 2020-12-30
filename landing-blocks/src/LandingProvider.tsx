import {
    CSSReset,
    DarkMode,
    Theme as ITheme,
    theme as chakraTheme,
    useColorMode,
} from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import { StackProps, Stack } from '@chakra-ui/react'
import merge from 'lodash/fp/merge'
import React, { Fragment, useMemo } from 'react'
import { PropagatedThemeProvider } from './layout'
import { DeepPartial } from 'utility-types'

export interface ThemeExtension extends ITheme {
    space: {
        pagePadding?: any
    } & ITheme['space']
    colors: {
        primary: string
        secondary: string
        black: string
        white: string
    } & ITheme['colors']
    sizes: {
        pageContainer: any
    } & ITheme['sizes']
    fontSizes: {
        text: any
        heading: any
        subheading: any
        subtext: any
    } & ITheme['fontSizes']
}

export type LandingProviderProps = {
    dark?: boolean
    primary?: string
    black?: string
    white?: string
    secondary?: string
    pageWidth?: any
    /*
    The page padding, defaults to 20px
    */
    pagePadding?: any
    spacing?: any
    theme?: DeepPartial<ThemeExtension>
    children?: any
} & StackProps

/*
should customize 
- font type
- font family
- buttons border radius
- primary color for buttons, illustrations, etc
- secondary color, for gradients, etc
- dark background mode
- black color for text, ...
- white color for text, ... if dark mode
*/

export function LandingProvider({
    dark = undefined,
    primary = 'purple',
    black = '#222',
    white = '#fff',
    secondary = 'purple',
    pageWidth = '1200px',
    pagePadding = '20px',
    spacing = '60px',
    fontFamily = 'Roboto, system-ui, sans-serif',
    theme: themeProp = {},
    children,
    ...rest
}: LandingProviderProps) {
    const { colorMode } = useColorMode()
    const Mode = dark ? DarkMode : Fragment
    dark = dark ?? colorMode === 'dark'
    const theme = useMemo(
        () =>
            merge(
                {
                    colors: {
                        primary,
                        secondary,
                        black,
                        white,
                    },
                    sizes: {
                        pageContainer: pageWidth,
                    },
                    space: {
                        pagePadding,
                    },
                    fonts: {
                        body: fontFamily,
                        heading: fontFamily,
                    },
                    fontSizes: {
                        text: '18px',
                        heading: '42px',
                        subheading: '24px',
                        subtext: '15px',
                    },
                },
                themeProp || {},
            ),

        [pageWidth, primary, secondary, black, white, fontFamily, themeProp],
    )
    return (
        <PropagatedThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Mode>
                {/* TODO propagate the color mode context from above, setting it to dark if dark=true */}
                {/* <CSSReset /> */}
                <Stack
                    // overflowX='hidden'
                    width='100%'
                    height='100%'
                    overflowX='hidden'
                    fontFamily={fontFamily}
                    spacing={spacing}
                    align='stretch'
                    color={dark ? 'white' : 'black'}
                    borderColor={dark ? 'rgba(255,255,255,.3)' : 'gray.300'}
                    {...rest}
                >
                    {children}
                </Stack>
            </Mode>
        </PropagatedThemeProvider>
    )
}

const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    html {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
    }
    #__next {
        min-height: 100%;
        /* height: 100%; */
    }
    body {
        height: 100%;
        width: 100%;
        overflow: auto;
        overflow-x: hidden;
    }
`
