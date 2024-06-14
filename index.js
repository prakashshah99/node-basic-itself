const userRoles = ["admin", "vender",];
const allowedRoles = ["inventoryManager", "vender",];

const checkRole = (userRoles,allowedRoles) => {

    return userRoles.some((role) => allowedRoles.includes(role));

};
const check = checkRole(userRoles, allowedRoles);
console.log(check);