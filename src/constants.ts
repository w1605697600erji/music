/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Track, Playlist, Category, Podcast, RadioStation } from './types';

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Echoes of the Deep',
    artist: 'Lumina Soundscapes',
    album: 'Serene Depths',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAbdiqN7R39d9cT0qMnQ8SKoYme44gQhql4zRy0Xeo-Nkiezg3qouzDV7suouVazRhWV_aLoO6KFACkBnNpSbUwzZ5gzT7AkF30c484tu1zgD22yGa29OF7kQfU74ELG3CO3hLSLGEqJLaOo-4TZeQIviynBon4cudWtn3j4eGdCoH5KCBwc5U02GdxFtMaOlR7O8CqxEzm_K0u5JAvfGQq4de5mxcucv30czCS6zz-ocvJsIaXW32MtCn3prhl7OJjWPus4o88mI',
    duration: '4:15',
    color: '#031631'
  },
  {
    id: '2',
    title: 'Weightless',
    artist: 'Nova Sound',
    album: 'Gravity',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0cbqPOfIdRb6VRaMK_soJ2jmPq1QRq41wLOVUCnTEoVy0gI4aUJFYchFGwdp0ExWGIFLxxtCCyhskoltQ00q-4eUqv0AKljRqeMDJ_39bVqkdQlkOr9c4tbRGIcbapcubH7aZMZ9o57NWGjiTG_ANEyv6WrK2aSy5LrpxnwmSiizXLW8pqCvP7kuY-VveNeyZs05z34FPG1lkrVeTvSCWpmg2vDKkK4B4mJdXXNxT-HhOpPLrWPHEsZPm1l6CqU5BQnH30P7wr-I',
    duration: '3:45'
  },
  {
    id: '3',
    title: 'Glass Heart',
    artist: 'Elena Roise',
    album: 'Fragile',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACA96-1iL6XhzXJXBp1LIPjvTlUSEg55Z3QKzncFonVqwQljPMlpvgp4lHkvTCYjTNXOgFreNCnV2LHNfLZ2by9Cgwod6rTrplKLcnb7dBUaJ3U34R0E9PPxJneydgaDAa_XvNdzyZjk2VHa0JhEh5nkMpzn_qdMYz8UIZwT-WcTRee9dC8NW_6TrtumxRSGkbtkKJB5lokTNn1svMh9Um1ND3moMvbt6t9X9Pt_JgyYJzeudTofz3HTX3AJVt9QiKCKfD6IHx1Bg',
    duration: '4:02'
  },
  {
    id: '4',
    title: 'Still Water',
    artist: 'The River Boys',
    album: 'Flow',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFB8pxjVKSe5zhTmzGEOzpnv-TMf-m9MzlFDX8DoyqEfFFG87eqv7iNsgq8gu_aVOc2GRl4pceYkeIpZCzxVeZ1NbhDJIN8iOryhNoaN6RbIhno7SI93ojaMRQCq0lOb9-w-dcHDCxjTUk4BzbIUCkkR8rpeYQ9GrTxspcO4ttcPsqQwEANZEunS1xvus1OE3ZBoekS5NH1pctYFSqkwQL6VUlFXglUTmprfW-lEXaayKXdAq9YukwNtRuW2icpRtcuCKIrvaWuq0',
    duration: '5:20'
  },
  {
    id: '5',
    title: 'Midnight Echoes',
    artist: 'The Synthetics',
    album: 'Nocturnal',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxr2ommVwHUh3QsJmq7mtfrKrcch3x0Z3AAMi7YsiUc3dKIcvuc1kJTwC5cRoAJXkorJC2Gye_ZImTjMlZpAp0Xm8V7v2zXCA8xVfoerGxbOIOYCQ2HVgWLRQD1a1EYVca2g1ok4LEMG8QBok-dvpEoBBNVckcFNuRffV8TApnZFOKWDAbHknjsFQcsPfhWC-k9twPqzaUNsWxOSGD6Yv6UwIj7IQMqHsQDg--Z4Z2XVhMPmYj2UlDnhx7PNryeNo9R2_GrgytMbM',
    duration: '3:12'
  }
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    name: 'Focus Flow',
    trackCount: 32,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9gX1KpZMplhdUpw-IMeLthQXLu_P6ghT1JKhHA7vxNf1qiPKOamjAT2JDVGWNNsXNzLnwuvkopyOuAaLzpD8JakBFYLbcW4lEosHM7Ce5Ajxxns-W_D7Tp1jNgTRbzwrzJ6WbuuMWxiQABSLSwKtQeJsdwsJyookOhzb2djRbBMOlOhU8rNGy4t35oBURTLfyVvu3wJnoEMn-bzHwr1NNl6swDHKJeWbTy89JWZFZcgN87JZsEwxoSASGCSxecQa90AwI9c1_uHg'
  },
  {
    id: 'p2',
    name: 'Acoustic Morning',
    trackCount: 24,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFkDcJzoDHc7QAQDR3xVJAwkAaovWEcJ7S24IPxx43d7UnioqToNxBZ5ZE_sUyBq8CDb57jYC49inReB4d_hiwb1ximw5aS_fZXnnoGvB6dWFK8L1UiDihT0KvC1QbNFb_upJVQ-Kmk8oBCMXXTsQsWHvz5dXzwLtvD4E4B6nSRM8BHQQcQPWwJTG5h4jLHUZSDHFqf-Ihedmg_J5H-dpvo7_6neSiXwMc7-n0lvudeyxm4Z3vC-skoaBr-aL68SkSnl1wPjWkEec'
  },
  {
    id: 'p3',
    name: 'Late Night Drive',
    trackCount: 45,
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDse-_UDlMTsttxBbReaYaTMsJyAANRB1lAXfbWKga_mZfo775QtlwT7dll-_UV-2wh-6G3VYryEJifS_NLCSkAznWdprMJVePT0Pm-1JyrUAxwpErqlspet-VpRX0yJ4su5X-0DpF5IGqAhrrt0-2wAtgpwWGO8ePgqx8565MjN99bhiKs7qGGk2dmixr0tzLs1oahE7lwWUaYLsDsywXTbEt2tK6L91JpwIGHqgiP1iVlWQifSEVBO75DusEUviX9g97ATvFA4x4'
  },
  {
    id: 'p4',
    name: 'Electronic Focus',
    trackCount: 85,
    duration: '6 hrs 20 mins',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv8xwXblNTt5i9uKMoV5vT-Y8JW0nfOQ1qKIgmGUTqIeSWF7N6D-HY8hqkC1dhVJgLqqyI6hQ5eKg7l7x-qbMKFOmjhljkuMh5eVy3gE8fi2IGZueZL4EExwVcKyoYXdvJqfiLZHiqKReRKkpmx_IwhP0GT1qHjWokdb5t0gbq9dc7wEjMCBlDZToMFYx5nVC0chMfUDXKHoTc7Ct5p73OSu0oBSd1FaKHWKd-Z2TxYM9U-1koigLqLHwyG-xC99mVg5u4LxB6MV0'
  }
];

export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Pop', gradient: 'from-surface-container to-surface-container-high' },
  { id: 'c2', name: 'Jazz', gradient: 'from-surface-container-highest to-surface-variant' },
  { id: 'c3', name: 'Lo-fi', gradient: 'from-surface-dim to-surface-variant' },
  { id: 'c4', name: 'Classical', gradient: 'from-secondary-fixed to-secondary-fixed-dim' }
];

export const RADIO_STATIONS: RadioStation[] = [
  { id: 'r1', name: 'KEXP 90.3', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKxQCQPizLDkjwtsGeveWY14Nxr3W9zR2H_DWfmoC8T4quJ0-SDy3ny6CCVpD54zlmTubKlr_-4mtGbyYaWtn4kD8HjNwz56yW7o5rTqcSzk3XosH29qv68_JRZ9VRl-XBLdtB2ZdfSVZDKB_u4-k8PEuaNBA7ROnQmiZ-ueKkEPAGMgAm9hzHnRFQB3jknhIdhyglGUQiVkoTz1b0vJIg9VADvfRpQcqnUTpUnJLoZlX3iqTkjx2JPRp_IMvDhy2orjMDYud3CbU' },
  { id: 'r2', name: 'BBC Radio 1', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADP5CgECj7NX9qllWzzzpYsJLLoSCPzqqVvw1rkALc8LxgyKYYmS6cm6_LW6v8AGpw6ATNk-rBUp327m46w5JiJHiIiqL2ZnyCfaBHferSOHDt156dKkMf6Tf9RoaHaWtI5sqh8oaPnjE48UknMrkS9iTJgV5KuN7wnTQD3QaM-I_4b9Rp49i2_-ypEdGmDLRzd1fJZ3q97KeD-gIjQgRXLWQHGGB1JqJyREWAK7ZTBzdwqodMg8W36YS0hWxchroNF-8P8JP2ktk' },
  { id: 'r3', name: 'Chill Vibes', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDobMU0dNeiEuMhexXtd5p_yeWXKCTBIGpCZT52vtC3vJWG23RASTnnSR4OzEDl0NgWDh14Fi85huOcQlGZY_JKJ9wa-c7q92XANIqFOGkku1S1aHMa4Ej40F-LSXO7IcSEB1lCkk5PbaqQm9tLcqHEYvcitvsX_X-Bs2Kfk88DdLZgfZMVQ8jDmikAVUSZbhBbQK-hHyksA7Ea_VjhZFvfljhtRdItkFRe83aOgWW8qR4_nbgHtUsNOknsjRhopTRzji45YIvZM' }
];

export const PODCASTS: Podcast[] = [
  {
    id: 'po1',
    title: 'The Neural Network: Future of AI',
    host: 'Science & Tech',
    category: 'Science & Tech',
    description: 'Exploring the cutting edge of artificial intelligence and its impact on modern society.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGrAF1cWd7F8E5KO8jvKULpI3QWjN0js_Gnms5SLfcRXo2F1abWIpf5tX3Bx5J_dwnggf0GPiw8RZPoz1iu0cXU8-YbT2_3J8LFlY7mboD6EHHPH0e_b7IykcP30Xgd5Et9sYVdJ7l1FnRmzWgXKFyK99ozm3gYqNsJ2IYvKLBWMnRG-OINnLwcMXsF4_3-66tLjy1duCrCyknDnMOOXTY6UOn09u805qpXzxK7w8_En0ebsROV_vq83WYSIoML4mWVziF7UTRUPA'
  },
  {
    id: 'po2',
    title: 'Morning Routines of the Highly Effective',
    host: 'Lifestyle',
    category: 'Lifestyle',
    description: 'Interviews with leaders and creatives on how they start their day with intention.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwvZ8bNrTyjpn2akJF1Ur5KLC0xyW20HAOGKJFEE2gzNo_uIl2nhafFDLiNnfoF2TS7VihERTyod13bTm9Ksq1PMdoW4nKIanaKctsOxICIN0ihsUQ892i5IcVJ0U-wUTeWEwIDvXotQIPH5nFcVjO-1sWVMD52w6dFkzw38nEovloOjBvA6ZhUvigp-i650mvslYXhNKscUvcOzNYcQUFfh79wXUV6-6xrPU0XluGW7LUdilCJD9b68EVLpa2PA1gk8pPGY6zsRM'
  },
  {
    id: 'po3',
    title: 'Acoustic Architectures',
    host: 'Music History',
    category: 'Music History',
    description: 'Deep dives into the greatest albums and the physical spaces where they were recorded.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgBvVeXAorUly3lzPb_ntv8Kw0sDz6qW-1QShZi9pGbpBYxDVvU0KZPX_REXRpFEhofbUe6IRzEcEAnN3IqViLS92E9rKSbX6grkCnn6TTJnMHMDvdPR8xP_IA1Qlk4h8DOYfmu4mefP0R5KLiWczmJCQYNItxtJflMphooagFvOD3Fj0_YBy2xGXeBKnlcDQJp-H8d3WJxc2Vh1Eq5FdTVe7ur3NlLrYPU6U3TWI6rOwi6o73CbhWNBVosr7OcBuVrPxkTqZZ5us'
  }
];
