import Card from "../components/card";

export interface Card {
    subtitle: string;
    shortDesc: string;
    img: string;
    imgSmall: string;
}

export const kegiatanKami: Card[] = [
    {
    subtitle: 'IDEAL TALKS',
    shortDesc: 'Program yang berfokus kepada pengembangan pendidikan dan kepemimpinan melalui kegiatan Talkshow, pelatihan dan FGD.',
    img: '/assets/templateCard.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    },
    {
    subtitle: 'LEADERSHIP BOOTCAMP',
    shortDesc: 'Program yang berfokus kepada Kepemimpinan dalam meningkatkan kemampuan leadershipnya melalui pelatihan-pelatihan',
    img: '/assets/templateCard.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    },
    {
    subtitle: 'IDEAL YOUTH AMBASSASOR',
    shortDesc: 'Program representatif dalam pergerakan pengembangan anak muda.',
    img: '/assets/templateCard.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    },
    {
    subtitle: 'RUANG ASPIRASI MUDA',
    shortDesc: 'Program tukar pikiran dengan Tokoh Nasional untuk menyampaikan Ide, gagasan dan Inovasi secara langsung kepada pemangku kepentingan',
    img: '/assets/templateCard.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    },
    {
    subtitle: 'YOUTH IMPACT',
    shortDesc: 'Program untuk memotivasi kaum muda agar melakukan aksi nyata yang memberikan kontribusi positif dalam skala lokal hingga nasional.',
    img: '/assets/templateCard.png', 
    imgSmall:'/assets/jumlahSiswa.png',
    },
];