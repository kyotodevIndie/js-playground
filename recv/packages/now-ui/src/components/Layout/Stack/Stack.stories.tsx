import type { Meta, StoryObj } from '@storybook/react'
import { Stack, VStack, HStack } from './Stack'

import React from 'react'

const ReservaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="48"
      viewBox="0 0 40 48"
      fill="none"
    >
      <path
        d="M38.8622 44.6792C38.1495 44.1182 34.9077 41.9799 33.3281 40.5728C32.7119 40.0233 33.1464 39.3933 32.4681 38.7335C31.6013 37.8942 30.6426 36.9815 29.6953 36.0112C28.6888 34.96 27.7431 33.8523 26.8627 32.6934C26.0396 31.5438 23.4737 28.0054 21.3837 25.6602C19.1443 23.1425 14.9115 20.0639 13.7481 17.2359C13.6791 17.0496 13.6147 16.8588 13.5572 16.6611C13.2794 15.6526 13.1613 14.6068 13.2076 13.5617C13.3252 12.0229 13.8956 10.5533 14.847 9.33808C16.2265 7.2389 15.9805 6.31462 15.5 6.24105C15.0194 6.16747 14.5182 6.19046 15.0401 3.99702C15.2358 3.48843 15.3235 2.94464 15.2973 2.40033C15.2712 1.85602 15.1319 1.32312 14.8884 0.83561C14.6194 0.389563 14.286 0.145847 14.0262 0.210225C13.4307 0.336682 12.9801 1.7323 12.3961 2.10017C12.2466 2.19444 11.4763 2.62209 11.6327 0.849405C11.6695 0.430949 11.3822 0.286099 10.9821 0.534414C9.9778 1.30979 9.29758 2.43084 9.07372 3.67973C9.04613 3.79239 8.93575 3.82688 8.88287 3.67973C8.78425 3.23119 8.80725 2.76445 8.94953 2.3278C9.10817 1.66792 9.37955 1.13681 9.07835 1.06323C8.69438 0.971263 8.15867 1.77139 7.73102 2.67268C7.66894 2.80833 7.64812 2.85202 7.60444 2.96468C7.56075 3.07734 7.4298 3.14401 7.4206 2.91409C7.42388 2.66823 7.46331 2.42418 7.53778 2.18984C7.57457 2.05419 7.50338 2.00131 7.4505 1.98751C7.32634 1.95532 7.16995 2.022 6.97912 2.16455C6.45026 2.60893 6.05276 3.18927 5.82951 3.84297C5.79733 3.92804 5.76968 4.01541 5.74209 4.10049L5.7237 4.15797C5.7237 4.18556 5.70534 4.21315 5.69844 4.24074C5.69155 4.26833 5.67323 4.33271 5.65943 4.37639C5.64564 4.42008 5.62487 4.49595 5.60877 4.55343L5.59263 4.62241C5.56504 4.73737 5.53755 4.85233 5.51685 4.97418C5.49616 5.09604 5.47078 5.23859 5.45469 5.36965V5.40184V5.42483C5.41122 5.77483 5.39437 6.12761 5.40417 6.48017C5.40417 6.53765 5.40417 6.59743 5.40417 6.65261C5.40417 6.83884 4.96036 6.88253 5.05923 7.31248C5.28628 8.23562 5.57198 9.14335 5.91456 10.0301C5.93355 10.0789 5.94222 10.1311 5.93996 10.1833C5.93769 10.2356 5.9245 10.2868 5.90136 10.3338C5.87823 10.3807 5.84561 10.4223 5.80552 10.4559C5.76543 10.4895 5.71879 10.5145 5.66855 10.5291C3.74444 11.0701 1.88842 11.8291 0.136644 12.7915C0.0723992 12.8314 0.0264254 12.8949 0.00838028 12.9684C-0.00966483 13.0419 0.00166851 13.1195 0.0400954 13.1847C0.132064 13.318 0.350472 13.3019 0.453936 13.2674C2.5968 12.557 5.6502 11.5568 7.1217 12.6236C8.20462 13.4054 8.3126 15.2723 7.63433 17.2864C7.40441 18.0337 7.15386 18.7005 6.91934 19.3856C3.78092 27.6789 9.56573 31.5001 14.8884 36.4273C15.6027 37.1416 16.2464 37.9231 16.8105 38.761C17.394 39.4528 17.7433 40.3117 17.8084 41.2143C17.7447 42.1048 17.6109 42.9889 17.4084 43.8584C17.1095 45.1965 16.7875 44.5481 14.6745 44.0032C14.0124 43.8354 13.9848 43.8975 13.5617 44.7942C13.1386 45.6909 13.0904 45.8288 13.2054 45.8909C13.3204 45.953 17.2565 45.9139 17.698 45.9967C17.7664 46.0094 17.8329 46.0311 17.8957 46.061C18.3763 46.2909 20.5536 47.3279 21.2181 47.7739C21.2869 47.8189 21.3696 47.8375 21.4511 47.8266C21.5325 47.8156 21.6073 47.7757 21.6618 47.7142C21.6822 47.6811 21.6956 47.6442 21.7015 47.6058C21.7075 47.5674 21.7058 47.5283 21.6964 47.4906C21.6869 47.4529 21.67 47.4175 21.6467 47.3864C21.6234 47.3553 21.5942 47.3291 21.5607 47.3095C20.5812 46.7048 18.6017 45.208 18.5511 44.7505C18.5327 44.5734 18.6913 43.9021 18.7809 43.3893C19.1373 41.0901 19.1925 40.2233 20.1352 39.7842C21.0089 39.3772 23.0506 40.4211 24.6554 40.8119C24.69 40.8202 24.72 40.8416 24.7389 40.8717C24.7578 40.9018 24.7642 40.9381 24.7566 40.9729C24.706 41.2028 24.5749 41.7431 24.2967 42.6605C24.2755 42.7695 24.2283 42.8719 24.159 42.9587C24.0898 43.0456 24.0006 43.1144 23.899 43.1594C23.0177 43.047 22.1507 42.842 21.3124 42.5478C20.933 42.4559 20.8227 42.2122 19.9651 44.017C19.903 44.1458 19.926 44.1918 19.9651 44.224C20.0042 44.2562 23.7841 44.4539 24.3175 44.555C24.4147 44.574 24.5091 44.6057 24.598 44.6493C26.0143 45.3391 27.15 45.9622 27.9134 46.3783C28.3226 46.6082 28.4584 46.7025 28.6032 46.5531C28.7964 46.3599 28.5871 46.2013 28.4423 46.061C28.3618 45.9806 27.5041 45.3874 26.6856 44.8011C25.8671 44.2148 25.1474 43.8814 25.1704 43.5986C25.2049 43.3447 25.2532 43.093 25.3152 42.8444C25.3405 42.7433 25.6234 41.6948 25.7246 41.3086C25.7296 41.291 25.738 41.2746 25.7494 41.2604C25.7609 41.2462 25.7752 41.2345 25.7913 41.2259C25.8074 41.2173 25.825 41.2121 25.8432 41.2105C25.8614 41.2089 25.8797 41.211 25.8971 41.2166C29.9322 42.5823 31.1737 45.1873 34.2477 46.8037C37.9402 48.7465 42.0236 47.144 38.876 44.6723"
        fill="white"
      />
    </svg>
  )
}

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  args: {},
}
export default meta
type Story = StoryObj<typeof meta>

export const Docs: Story = {
  args: {
    children: (
      <VStack>
        <h3>Stack</h3>
        <Stack className="bg-slate-600 gap-6 p-2.5 rounded-xl">
          <ReservaIcon />
          <ReservaIcon />
          <ReservaIcon />
        </Stack>
        <h3>VStack</h3>
        <VStack className="bg-slate-600 gap-6 p-2.5 rounded-xl">
          <ReservaIcon />
          <ReservaIcon />
          <ReservaIcon />
        </VStack>
        <h3>HStack</h3>
        <HStack className="bg-slate-600 gap-6 p-2.5 rounded-xl">
          <ReservaIcon />
          <ReservaIcon />
          <ReservaIcon />
        </HStack>
      </VStack>
    ),
  },
}