<template>
  <MainTemplate :headerLinks="headerLinks" :footerLinks="footerLinks">
    <SuppliersGrid
      icon="fas fa-shoe-prints"
      title="ОБУВЬ"
      subtitle="power suppliers"
      :suppliers="shoeSuppliers"
    />
    
    <SuppliersGrid
      icon="fas fa-tshirt"
      title="ПО БРЕНДАМ"
      subtitle="streetwear & luxury batch"
      :suppliers="brandSuppliers"
    />
    
    <ShippingBlock
      title="СТАВКИ ЗА КГ"
      coefficientText="объемный вес /7000"
      :tableData="shippingData"
      :weightColumns="weightColumns"
      :infoHtml="shippingInfo"
      footnoteLeft="объемный вес /7000"
      footnoteRight="менеджер: @RRL_manager"
    />

    <CISShippingBlock />
    
    <!-- <FeaturesSection :features="features" /> -->
  </MainTemplate>
</template>

<script setup>
import MainTemplate from '@/components/templates/MainTemplate.vue'
import SuppliersGrid from '@/components/organisms/SuppliersGrid.vue'
import ShippingBlock from '@/components/organisms/ShippingBlock.vue'
// import FeaturesSection from '@/components/organisms/FeaturesSection.vue'
import CISShippingBlock from '@/components/organisms/CISShippingBlock.vue'

// Данные для шапки
const headerLinks = [
  { label: 'TELEGRAM', href: 'https://t.me/RedRayLogistics', icon: 'fab fa-telegram' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/@red_raylogistics', icon: 'fab fa-tiktok' },
  { label: 'МЕНЕДЖЕР', href: 'https://t.me/RRL_manager', icon: 'fas fa-user-headset' },
  { label: 'БОТ', href: 'https://t.me/rule_and_blanksbot', icon: 'fas fa-robot' },
  // { label: 'ЗАКАЗ', href: 'https://t.me/RedRayLogistics/259', icon: 'fas fa-question-circle' }
]

// Данные для подвала
const footerLinks = [
  { label: 'channel', href: 'https://t.me/RedRayLogistics', icon: 'fab fa-telegram' },
  { label: 'manager', href: 'https://t.me/RRL_manager', icon: 'fas fa-user-tie' },
  { label: 'bot', href: 'https://t.me/rule_and_blanksbot', icon: 'fas fa-bolt' }
]

// Поставщики обуви
const shoeSuppliers = [
  {
    title: 'UMKAO',
    badgeText: 'SNEAKER FACTORY',
    description: 'Крупнейший поставщик кроссовок и повседневной обуви. Каталог xyupoo, стабильный поток, низкие цены.',
    storeLink: 'https://umkao.xyupoo.com',
    storeLabel: 'umkao.xyupoo.com',
    tags: [
      { name: 'Nike', strong: '' },
      { name: 'Adidas', strong: '' },
      { name: 'New Balance', strong: '' },
      { name: 'Asics', strong: '' }
    ],
    primaryLink: 'https://t.me/RRL_manager',
    primaryText: 'Поставщик',
    primaryIcon: 'fab fa-telegram',
    secondaryLink: '',
    secondaryText: 'Каталог',
    secondaryIcon: 'fas fa-external-link-alt'
  },
  {
    title: 'WEIDIAN BASE',
    badgeText: 'DIRECT',
    description: 'Магазин на Weidian, огромный выбор кроссовок, быстрая обработка. Dunk, Jordan, Yeezy.',
    storeLink: 'https://weidian.com/?userid=1621765644&spider_token=4985',
    storeLabel: 'weidian.com/userid=1621765644',
    tags: [
      { name: 'Dunk', strong: '' },
      { name: 'Jordan', strong: '' },
      { name: 'Yeezy', strong: '' },
      { name: 'Travis Scott', strong: '' }
    ],
    primaryLink: 'https://t.me/RRL_manager',
    primaryText: 'Поставщик',
    primaryIcon: 'fab fa-telegram',
    secondaryLink: '',
    secondaryText: 'Смотреть',
    secondaryIcon: 'fas fa-search'
  },
  {
    title: 'TREND SNEAKERS',
    badgeText: 'PREMIUM',
    description: 'Редкие релизы, коллаборации, эксклюзив. Weidian премиум-сегмент.',
    storeLink: 'https://shop1697744208.v.weidian.com/?userid=1697744208&spider_token=3818',
    storeLabel: 'shop1697744208.v.weidian.com',
    tags: [
      { name: 'LV Trainer', strong: '' },
      { name: 'Balenciaga', strong: '' },
    ],
    primaryLink: 'https://t.me/RRL_manager',
    primaryText: 'Поставщик',
    primaryIcon: 'fab fa-telegram',
    secondaryLink: '',
    secondaryText: 'Магазин',
    secondaryIcon: 'fas fa-shopping-bag'
  }
]

// Поставщики брендов
const brandSuppliers = [
  {
    title: 'GOAT OFFICIAL',
    badgeText: 'TOP BATCH',
    description: 'Один из лучших агрегаторов брендовой одежды. Качество топ-реплик, каталог xyupoo.',
    storeLink: 'https://goat-official.xyupoo.com',
    storeLabel: 'goat-official.xyupoo.com',
    tags: [
      { name: 'Trapstar' }, { name: 'Cortez' }, { name: 'Stone Island' },
      { name: 'CP Company' }, { name: 'Polar' }, { name: 'Dime' },
      { name: 'Nike/Supreme' }, { name: 'Gallery Dept' }, { name: 'Vetements' }
    ],
    primaryLink: 'https://t.me/RRL_manager',
    primaryText: 'Поставщик',
    primaryIcon: 'fab fa-telegram',
    secondaryLink: '',
    secondaryText: 'Каталог',
    secondaryIcon: 'fas fa-images'
  },
  {
    title: 'SI / CP HUB',
    badgeText: 'PREMIUM FABRIC',
    description: 'Специализированный поставщик Stone Island, CP Company, Cargo. Оригинальные бирки, элитный материал.',
    tags: [
      { name: 'Stone Island', strong: '' },
      { name: 'CP Company', strong: '' },
      { name: 'Cargo pants', strong: '' },
      { name: 'Shadow Project', strong: '' }
    ],
    primaryLink: 'https://t.me/RRL_manager',
    primaryText: 'Поставщик',
    primaryIcon: 'fab fa-telegram',
    secondaryLink: '',
    secondaryText: 'Чат',
    secondaryIcon: 'fas fa-headset'
  }
]

// Таблица доставки
const weightColumns = ['2-3kg', '4-6kg', '7kg', '8kg', '9kg', '10kg']
const shippingData = [
  { country: 'Europe', '2-3kg': '18$', '4-6kg': '17$', '7kg': '16$', '8kg': '15$', '9kg': '14.5$', '10kg': '13.5$' },
  { country: 'U.A.E', '2-3kg': '17$', '4-6kg': '16$', '7kg': '15$', '8kg': '14.5$', '9kg': '14.5$', '10kg': '13.5$' },
  { country: 'U.K', '2-3kg': '19$', '4-6kg': '18$', '7kg': '17$', '8kg': '16.5$', '9kg': '17$', '10kg': '15.5$' },
  { country: 'Ukraine', '2-3kg': '20$', '4-6kg': '20$', '7kg': '20$', '8kg': '20$', '9kg': '20$', '10kg': '20$' },
  { country: 'Malta', '2-3kg': '23$', '4-6kg': '20$', '7kg': '19$', '8kg': '17.5$', '9kg': '16$', '10kg': '15$' },
  { country: 'Cyprus', '2-3kg': '19$', '4-6kg': '18$', '7kg': '17$', '8kg': '16.5$', '9kg': '17$', '10kg': '15.5$' },
  { country: 'Moldova', '2-3kg': '25$', '4-6kg': '25$', '7kg': '23$', '8kg': '22$', '9kg': '21$', '10kg': '20$' },
  { country: 'Israel', '2-3kg': '25$', '4-6kg': '24$', '7kg': '23$', '8kg': '22$', '9kg': '21$', '10kg': '20$' },
  { country: 'Norway', '2-3kg': '22$', '4-6kg': '19$', '7kg': '18$', '8kg': '17$', '9kg': '16$', '10kg': '15$' },
  { country: 'Switzerland', '2-3kg': '23$', '4-6kg': '21$', '7kg': '19$', '8kg': '18$', '9kg': '17$', '10kg': '16$' },
  { country: 'U.S.', '2-3kg': '22$', '4-6kg': '19$', '7kg': '18$', '8kg': '17$', '9kg': '16$', '10kg': '15$' },
  { country: 'Indonesia', '2-3kg': '25$', '4-6kg': '23$', '7kg': '22$', '8kg': '21$', '9kg': '20$', '10kg': '20$' },
  { country: 'Thailand', '2-3kg': '25$', '4-6kg': '23$', '7kg': '22$', '8kg': '21$', '9kg': '20$', '10kg': '20$' },
  { country: 'Armenia', '2-3kg': '24$', '4-6kg': '24$', '7kg': '24$', '8kg': '24$', '9kg': '24$', '10kg': '24$' }
]

const shippingInfo = `
  <i class="fas fa-box-open"></i> <strong>MIN CONDITIONS:</strong> первая посылка 60×50×60 см, мин. вес 25kg. Коэффициент 500 в отдельных странах (*)<br>
  <i class="fas fa-ship"></i> <strong>Срок:</strong> 6-20 рабочих дней после отправки. Счет оплатить в течение 3 суток.<br>
  <i class="fas fa-fire"></i> <strong>PERSONAL OFFER:</strong> отправка и цена за кг обсуждаются в ЛС — даём лучшую ставку.
`

const features = [
  { icon: 'fas fa-bolt', text: 'прямые фабрики Китая' },
  { icon: 'fas fa-shield-haltered', text: 'страховка груза' },
  { icon: 'fas fa-headset', text: '24/7 поддержка в тг' },
  { icon: 'fas fa-tachometer-alt', text: 'трекинг 24/7' }
]
</script>