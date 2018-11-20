var customers = [
    {
        id     : 1,
        nama   : 'dimas',
        kota   : 'jakarta utara',
        alamat : 'jl merdeka no 11, pademangan'
    },
    {
        id     : 2,
        nama   : 'windy',
        kota   : 'tangerang',
        alamat : 'jl kisamaun no 44, kedaung'
    },
    {
        id     : 3,
        nama   : 'raka',
        kota   : 'tangerang',
        alamat : 'jl kisamaun no 43, kedaung'
    }
];

const getAll = () =>{
    return customers;
};

const getByID = (id) =>{
    return customers.find(x => x.id == id);
};

const save = (obj) => {
    customers.push(obj);
    return 'data saved!';
};

const remove = (id) => {    
    let index = customers.map(x => {
        return x.id
    }).indexOf(parseInt(id));

    customers.splice(index,1);
    return 'data removed!';
};

const update = (obj) => {
    let cust = getByID(obj.id);
    cust.nama   = obj.nama;    
    cust.kota   = obj.kota;    
    cust.alamat = obj.alamat;    

    return 'data updated!';
};

const getCount = customers.length;

module.exports = {
    GetAll   : () =>{ return getAll(); },
    GetByID  : (id) =>{ return getByID(id); },
    GetCount : getCount,
    Save     : (obj) => { return save(obj); },
    Update   : (obj) => { return update(obj); },
    Remove   : (id) => { return remove(id); },
};