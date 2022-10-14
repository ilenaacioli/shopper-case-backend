import { IOrderDB, IOrderItemsDB } from "../../models/Order"
import { IProductDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
  {
    id: "1",
    name: "user_admin",
    email: "user_admin@gmail.com",
    password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
    role: USER_ROLES.ADMIN
  },
  {
    id: "2",
    name: "user_normal",
    email: "user_normal@gmail.com",
    password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
    role: USER_ROLES.NORMAL
  }
]

export const products: IProductDB[] = [
  {
    id: 1,
    name: "PRODUTO TESTE",
    price: 10.00,
    qty_stock: 0
  },
  {
    id: 16,
    name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
    price: 20.49,
    qty_stock: 158
  },
  {
    id: 18,
    name: "BEBIDA ENERGÉTICA VIBE 2L",
    price: 8.99,
    qty_stock: 659
  },
  {
    id: 19,
    name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
    price: 7.29,
    qty_stock: 909
  },
  {
    id: 20,
    name: "ENERGÉTICO RED BULL ENERGY DRINK 355ML",
    price: 10.79,
    qty_stock: 159
  },
  {
    id: 22,
    name: "ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",
    price: 7.49,
    qty_stock: 659
  },
  {
    id: 23,
    name: "ÁGUA MINERAL BONAFONT SEM GÁS 1 5L",
    price: 2.39,
    qty_stock: 909
  },
  {
    id: 24,
    name: "FILME DE PVC WYDA 28CMX15M",
    price: 3.99,
    qty_stock: 160
  },
  {
    id: 25,
    name: "FILME DE PVC PRATSY 15M",
    price: 4.39,
    qty_stock: 410
  },
  {
    id: 26,
    name: "ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7 5M",
    price: 5.79,
    qty_stock: 660
  },
  {
    id: 27,
    name: "ÁGUA MINERAL SEM GÁS MINALBA 1 5L",
    price: 2.29,
    qty_stock: 910
  },
  {
    id: 28,
    name: "GUARDANAPO GRAND HOTEL SCOTT 24X24CM C/ 50UN",
    price: 4.39,
    qty_stock: 160
  },
  {
    id: 29,
    name: "GUARDANAPO DIA A DIA SCOTT 24X22CM C/ 50UN",
    price: 2.59,
    qty_stock: 411
  },
  {
    id: 33,
    name: "GUARDANAPO FOLHA DUPLA SNOB 23 5X23 5CM C/ 50UN",
    price: 4.25,
    qty_stock: 411
  },
  {
    id: 34,
    name: "GUARDANAPO FOLHA SIMPLES SNOB 24X22CM C/ 50UN",
    price: 2.19,
    qty_stock: 661
  },
  {
    id: 35,
    name: "PAPEL TOALHA SNOB C/ 2UN",
    price: 5.39,
    qty_stock: 912
  },
  {
    id: 36,
    name: "TOALHA DE PAPEL SCOTT DURAMAX C/ 1UN",
    price: 11.29,
    qty_stock: 162
  },
  {
    id: 40,
    name: "PRATO DESCARTÁVEL COPOBRAS 18CM",
    price: 1.99,
    qty_stock: 163
  },
  {
    id: 41,
    name: "PRATO DESCARTÁVEL COPOBRAS 15CM",
    price: 2.09,
    qty_stock: 413
  },
  {
    id: 43,
    name: "PRATO DESCARTÁVEL COPOBRAS 21CM",
    price: 3.79,
    qty_stock: 913
  },
  {
    id: 45,
    name: "COLHER DESCARTÁVEL MASTER PRAFESTA BRANCA C/ 50UN",
    price: 5.99,
    qty_stock: 413
  },
  {
    id: 47,
    name: "GARFO DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",
    price: 7.49,
    qty_stock: 914
  },
  {
    id: 48,
    name: "FACA DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN",
    price: 8.99,
    qty_stock: 164
  },
  {
    id: 51,
    name: "SACO PARA LIXO DOVER ROLL SUPER FORTE AZUL 50L C/ 30UN",
    price: 42.9,
    qty_stock: 915
  },
  {
    id: 53,
    name: "PANO PARA LIMPEZA PERFEX C/ 5UN",
    price: 6.99,
    qty_stock: 415
  },
  {
    id: 54,
    name: "PANO PARA LIMPEZA ALKLIN C/ 5UN",
    price: 4.79,
    qty_stock: 665
  },
  {
    id: 55,
    name: "VELA SANTA CRUZ BRANCA C/8 25G",
    price: 5.89,
    qty_stock: 915
  },
  {
    id: 57,
    name: "VELA SANTA CRUZ C/8 30G",
    price: 6.89,
    qty_stock: 416
  },
  {
    id: 58,
    name: "BEBIDA DE SOJA SOYOS SÚFRESH LARANJA E CENOURA 1L",
    price: 4.99,
    qty_stock: 666
  },
  {
    id: 59,
    name: "BEBIDA A BASE DE SOJA ADES LARANJA 1L",
    price: 5.39,
    qty_stock: 916
  },
  {
    id: 60,
    name: "BEBIDA A BASE DE SOJA ADES MAÇÃ 1L",
    price: 5.59,
    qty_stock: 166
  },
  {
    id: 61,
    name: "BEBIDA À BASE DE SOJA ADES MAÇÃ ZERO 1L",
    price: 7.39,
    qty_stock: 416
  },
  {
    id: 62,
    name: "BEBIDA À BASE DE SOJA ADES LARANJA ZERO 1L",
    price: 7.39,
    qty_stock: 667
  },
  {
    id: 65,
    name: "CREME DE TRATAMENTO ELSEVE ULTRA LISO 300G",
    price: 16.99,
    qty_stock: 417
  },
  {
    id: 66,
    name: "CREME DE TRATAMENTO ELSEVE OLÉO EXTRAORDINÁRIO 300G",
    price: 18.99,
    qty_stock: 667
  },
  {
    id: 74,
    name: "DESODORANTE ROLL ON DOVE ORIGINAL 50ML",
    price: 10.49,
    qty_stock: 669
  },
  {
    id: 75,
    name: "DESODORANTE ROLL ON DOVE SENSITIVE SEM PERFUME 50ML",
    price: 10.74,
    qty_stock: 919
  },
  {
    id: 76,
    name: "DESODORANTE AEROSOL DOVE BEAUTY 150ML",
    price: 14.99,
    qty_stock: 169
  },
  {
    id: 77,
    name: "DESODORANTE AEROSOL DOVE PURE 100G",
    price: 13.19,
    qty_stock: 419
  },
  {
    id: 78,
    name: "REFRIGERANTE ANTARCTICA GUARANÁ 2L",
    price: 6.79,
    qty_stock: 670
  },
  {
    id: 79,
    name: "ÁGUA MINERAL SEM GÁS CRYSTAL GARRAFÃO 5L",
    price: 7.99,
    qty_stock: 920
  },
  {
    id: 82,
    name: "REFRIGERANTE H2OH! DE LIMÃO 500ML",
    price: 3.09,
    qty_stock: 670
  },
  {
    id: 84,
    name: "DESODORANTE AEROSOL NIVEA SENSITIVE SEM PERFUME 150ML",
    price: 11.99,
    qty_stock: 171
  },
  {
    id: 87,
    name: "REFRIGERANTE H2OH! LIMÃO 1 5L",
    price: 6.99,
    qty_stock: 921
  },
  {
    id: 88,
    name: "DESODORANTE AEROSOL NIVEA BLACK&WHITE INVISIBLE MASCULINO 150ML",
    price: 11.99,
    qty_stock: 171
  },
  {
    id: 92,
    name: "ÁGUA MINERAL PRATA SEM GÁS 1 5L",
    price: 3.09,
    qty_stock: 172
  },
  {
    id: 94,
    name: "NÉCTAR MAGUARY DE MARACUJÁ 1L",
    price: 4.49,
    qty_stock: 672
  },
  {
    id: 95,
    name: "REFRIGERANTE ANTARCTICA GUARANÁ ZERO 2L",
    price: 5.79,
    qty_stock: 923
  },
  {
    id: 96,
    name: "ÁGUA MINERAL SEM GÁS CRYSTAL PET 1 5L",
    price: 2.59,
    qty_stock: 173
  },
  {
    id: 97,
    name: "ÁGUA MINERAL BONAFONT SEM GÁS 500ML",
    price: 1.75,
    qty_stock: 423
  },
  {
    id: 98,
    name: "DESODORANTE AEROSOL REXONA ANTIBACTERIANO + INVISIBLE PROTECTION FEMININO 150ML",
    price: 11.99,
    qty_stock: 673
  }
]

export const orders: IOrderDB[] = [
  {
    id: "sd7yc4jx8xowkufckocemr489r",
    user_name: "joão",
    delivery_date: "2022-10-05",
    total_price_order: 15.49
  }
]

export const ordersItems: IOrderItemsDB[] = [
  {
    order_id: "sd7yc4jx8xowkufckocemr489r",
    user_name: "joão",
    product_id: 98,
    quantity: 1,
    total_price_item: 11.99
  },
  {
    order_id: "sd7yc4jx8xowkufckocemr489r",
    user_name: "joão",
    product_id: 97,
    quantity: 2,
    total_price_item: 3.5
  }

]