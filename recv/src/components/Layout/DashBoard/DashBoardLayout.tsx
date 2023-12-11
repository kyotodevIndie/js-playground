import React, { useState } from 'react'
import { Avatar, Stack, VStack, Text } from 'now-ui'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../../../assets/images/recvLogo.svg'
import {
  CaretDown,
  ChartLineUp,
  Flag,
  Gear,
  Headset,
  Lifebuoy,
  MegaphoneSimple,
  SignOut,
  UserSwitch,
} from '@phosphor-icons/react'
import AvatarMock from '../../../assets/images/avatar.svg'
import { MetaCard } from '../../Cards'

interface SideBarMainLinksItemProps {
  name: string
  href: string
}

interface SideBarMainLinksProps {
  name: string
  icon: React.ReactElement
  linkItems?: SideBarMainLinksItemProps[]
}

interface SideBarSupportLinksProps {
  name: string
  href: string
  icon: React.ReactElement
}

const mockUserInfos = {
  profilePicture: AvatarMock,
  name: 'Eliana Verner',
  email: 'eliena@usereserva.com.br',
  role: 'admin',
  currentGoal: 500,
  finalGoal: 1000,
}

const SideBarMainLinks: SideBarMainLinksProps[] = [
  {
    name: 'Marcas',
    icon: <Lifebuoy />,
    linkItems: [
      { name: 'Reserva', href: '#' },
      { name: 'Reversa', href: '#' },
      { name: 'Baw Clothing', href: '#' },
      { name: 'Mini', href: '#' },
    ],
  },
  {
    name: 'Campanhas1',
    icon: <MegaphoneSimple />,
    linkItems: [
      { name: 'Abondono de Carrinho', href: '#' },
      { name: 'Recuperação de vendas', href: '#' },
      { name: 'Outro Item', href: '#' },
      { name: 'Outro Item', href: '#' },
    ],
  },
]

const SideBarSupportLinks: SideBarSupportLinksProps[] = [
  {
    icon: <ChartLineUp />,
    name: 'Resultados Gerais',
    href: '/dashboard/results',
  },
  {
    icon: <Flag />,
    name: 'Painel Administrativo',
    href: '/dashboard/administrative',
  },
  { icon: <UserSwitch />, name: 'Usuários', href: '/dashboard/users' },
  { icon: <Headset />, name: 'Atendimento', href: '/dashboard/services' },
  { icon: <Lifebuoy />, name: 'Suporte', href: '#' },
  { icon: <Gear />, name: 'Configurações', href: '/dashboard/configs' },
]

const MenuLink = ({ name, icon, linkItems }: SideBarMainLinksProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <VStack className="w-full">
      <Stack className="p-[10px_20px] bg-primary-50 rounded-md text-base-100 justify-between w-full mt-2">
        <Stack className="gap-2">
          {icon && icon}
          <Text variant="paragraph4" className="font-semibold">
            {name}
          </Text>
        </Stack>
        <CaretDown
          onClick={() => setIsOpen(!isOpen)}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Stack>
      {linkItems && isOpen && (
        <VStack className="items-start my-3 ml-12 gap-5 w-full">
          {linkItems!.map(
            ({ name, href }: SideBarMainLinksItemProps, index: number) => (
              <NavLink to={href} key={index}>
                <Text className="ml-5 font-semibold" variant="paragraph4">
                  {name}
                </Text>
              </NavLink>
            ),
          )}
        </VStack>
      )}
    </VStack>
  )
}
export const DashBoardLayout = () => {
  return (
    <Stack className="items-start justify-start h-[100vh] w-full">
      <VStack className="bg-slate-25 p-[30p_50px] w-[400px] h-full shadow-md fixed">
        <img src={Logo} alt="rec v logo" />

        <VStack className="h-full w-full justify-between items-start">
          {/* Top Links */}
          <VStack className="w-full mt-8">
            {SideBarMainLinks!.map(
              (
                { name, icon, linkItems }: SideBarMainLinksProps,
                index: number,
              ) => (
                <MenuLink
                  key={index}
                  name={name}
                  icon={icon}
                  linkItems={linkItems}
                />
              ),
            )}
          </VStack>

          {/* Bottom Links */}
          <VStack className="w-full">
            <VStack className="items-start w-full">
              {SideBarSupportLinks.map(({ name, href, icon }, index) => (
                <Stack key={index} className="gap-2">
                  {icon && icon}
                  <NavLink to={href}>
                    <Text className="font-semibold" variant="paragraph4">
                      {name}
                    </Text>
                  </NavLink>
                </Stack>
              ))}
            </VStack>

            <MetaCard
              currentGoal={mockUserInfos.currentGoal}
              finalGoal={mockUserInfos.finalGoal}
            />

            <Stack className="w-full h-1 bg-slate-200 rounded-md my-7" />

            <Stack className="justify-between w-full">
              <Stack className="gap-4">
                <Avatar src={mockUserInfos.profilePicture} size="md" />
                <VStack className="items-start">
                  <Text
                    className="text-slate-600 font-medium"
                    variant="paragraph4"
                  >
                    {mockUserInfos.name}
                  </Text>
                  <Text className="text-slate500" variant="paragraph6">
                    {mockUserInfos.email}
                  </Text>
                </VStack>
              </Stack>
              <SignOut width={'30px'} height={'30px'} cursor={'pointer'} />
            </Stack>
          </VStack>
        </VStack>
      </VStack>

      <Stack className="justify-start ml-[400px]">
        <Outlet />
      </Stack>
    </Stack>
  )
}
