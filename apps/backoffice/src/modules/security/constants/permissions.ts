type PermissionsList = string [];

export const ORDER_VIEW: PermissionsList = [
    'USER',
    'ORDER_VIEW',
    'ORDER_STATUS_VIEW',
    'PRODUCT_VIEW',
    'PRODUCT_PROVIDER_VIEW',
    'LOGISTIC_PROVIDER_VIEW',
    'DRIVER_VIEW',
    'CARRIER_VIEW',
    'CAR_VIEW',
]
export const ORDER_STATUS_CHANGE: PermissionsList = [
    'ORDER_STATUS',
]

export const ORDER_ADMIN: PermissionsList = [
    'ORDER_VALIDATE',
    'ORDER_STATUS_ADMIN',
    'ORDER_SETTINGS_ADMIN',
    'ORDER_SETTINGS_VIEW',
    'SHIPPING_ADMIN',
    'PAYMENT_VIEW',
    'REPORT_VIEW',
]
export const INVENTORY_VIEW: PermissionsList = [
    "CATEGORY_ADMIN",
    "PRODUCT_ADMIN",
    "PRODUCT_VIEW",
    "PRODUCT_STOCK",
]


export const PROVIDER_ADMIN: PermissionsList = [
    "PRODUCT_PROVIDER_ADMIN",
    "PRODUCT_PROVIDER_VIEW",
    "LOGISTIC_PROVIDER_ADMIN",
    "LOGISTIC_PROVIDER_VIEW",
    "DRIVER_ADMIN",
    "DRIVER_VIEW",
    "CARRIER_ADMIN",
    "CARRIER_VIEW",
    "CAR_ADMIN",
    "CAR_VIEW",
]


export const SUPER_ADMIN: PermissionsList = [
    'ADMIN'
];


export const GROUPS = {
    ORDER_VIEW,
    ORDER_STATUS_CHANGE,
    ORDER_ADMIN,
    INVENTORY_VIEW,
    PROVIDER_ADMIN,
    SUPER_ADMIN
}
//
// const permissions = [
//     // Para el modulo de ordenes
//     "COUPON_ADMIN",
//     "COUPON_VIEW",
//     "INFLUENCER_ADMIN",
//     "INFLUENCER_VIEW",
//     "ORDER_ADMIN",
//     "ORDER_STATUS",
//     "ORDER_VIEW",
//     "ORDER_VALIDATE",
//     "ORDER_STATUS_ADMIN",
//     "ORDER_STATUS_VIEW",
//     "ORDER_SETTINGS_ADMIN",
//     "ORDER_SETTINGS_VIEW",
//     "SHIPPING_ADMIN",
//
//     //Para el modulo de Pagos
//     "PAYMENT_ADMIN",
//     "PAYMENT_VIEW",
//     // "Para el modulo de inventario",
//     "CATEGORY_ADMIN",
//     "PRODUCT_ADMIN",
//     "PRODUCT_VIEW",
//     "PRODUCT_STOCK",
//
//     //Modulos Generales
//     "REPORT_VIEW",
//
//     //Modulo de Porveedores
//     "PRODUCT_PROVIDER_ADMIN",
//     "PRODUCT_PROVIDER_VIEW",
//     "LOGISTIC_PROVIDER_ADMIN",
//     "LOGISTIC_PROVIDER_VIEW",
//     "DRIVER_ADMIN",
//     "DRIVER_VIEW",
//     "CARRIER_ADMIN",
//     "CARRIER_VIEW",
//     "CAR_ADMIN",
//     "CAR_VIEW",
// ]