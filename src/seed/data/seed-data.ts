import { ValidRoles } from "src/auth/interfaces/valid-roles";
import { ProductType } from "src/utils/constants";
import * as bcrypt from 'bcrypt'

interface SeedProduct {
  description: string;
  images: string[];
  stock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: ProductType;
}

interface SeedUser {
  email:    string;
  fullName: string;
  direction: string;
  phone: string;
  dui: string;
  password: string;
  roles:     string[];
}

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'admin@mail.com',
      fullName: 'Admin',
      direction: 'Nowhere',
      phone: '42444324324',
      dui: '00000000',
      password: bcrypt.hashSync('qwerty', 10),
      roles: [ValidRoles.admin],
    },
    {
      email: 'ricardo@mail.com',
      fullName: 'Ricardo Aguilar',
      direction: 'Vevezuela',
      phone: '99999999',
      dui: '00000000',
      password: bcrypt.hashSync('qwerty', 10),
      roles: [ValidRoles.customer],
    }
  ],
  products: [
    {
      title: "Aston Martin DB11",
      description: "is the first model launched in Aston Martin's 'second century' plan and the company's tie-up with Daimler AG.",
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Aston_Martin_DB11_Volante_Free_Car_Picture_-_Give_Credit_Via_Link_%28cropped%29.jpg/560px-Aston_Martin_DB11_Volante_Free_Car_Picture_-_Give_Credit_Via_Link_%28cropped%29.jpg',
        'https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Aston_Martin-DB11_2017_C01.jpg',
      ],
      stock: 3,
      price: 217000,
      slug: "aston_martin_db11",
      type: ProductType.CARS,
      tags: ['Aston Martin', 'Luxury', 'James Bond'],
    },
    {
      title: "Lamborghini Sesto Elemento",
      description: "High-performance limited edition car produced by the Italian automobile manufacturer Lamborghini. Name is a reference to the atomic number of carbon, referring to the carbon fibre used in its construction.",
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lamborghini_Sesto_Elemento_4.JPG/560px-Lamborghini_Sesto_Elemento_4.JPG',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sesto_3.JPG/440px-Sesto_3.JPG',
      ],
      stock: 5,
      price: 6500000,
      slug: "lamborghini_sesto_elemento",
      type: ProductType.CARS,
      tags: ['Lamborghini', 'Limited edition', 'high-performance'],
    },
    {
      title: "Ford Explorer Eddie Bauer 2007",
      description: "Is a range of SUVs manufactured by Ford Motor Company since the 1991 model year. As the first four-door SUV produced by Ford",
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/2011_Ford_Explorer_XLT_--_05-18-2011.jpg/560px-2011_Ford_Explorer_XLT_--_05-18-2011.jpg',
      ],
      stock: 10,
      price: 15000,
      slug: "ford_explorer_eddie_bauer_2007",
      type: ProductType.CARS,
      tags: ['SUV', 'Truck', 'Ford'],
    },
  ]
}
