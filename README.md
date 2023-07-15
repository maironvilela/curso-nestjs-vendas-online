# curso-nestjs-vendas-online

# Diagrama ER
https://dbdiagram.io/d/644304546b31947051004b36

# Comandos NestJS
## Criar modulo
```
  nest g module address
```

## Criar controller
```
nest g controller address
```

# TypeORM
## Migrations

As migrations no TypeORM são uma parte importante da abordagem de desenvolvimento, pois permitem que você gerencie as mudanças no esquema do banco de dados de forma mais sistemática e controlada. Com o uso de migrations, é possível versionar e rastrear as alterações no esquema ao longo do tempo, facilitando a colaboração em projetos com várias pessoas e garantindo que todos os ambientes tenham a mesma estrutura de banco de dados.
### Criar Migrations
```

typeorm migration:create ./src/typeorm/migration/create_table_address
```

## Relacionamentos

O TypeORM oferece suporte a vários tipos de relacionamentos entre entidades (tabelas) em bancos de dados relacionais. Esses relacionamentos são definidos usando anotações ou decorators no TypeScript. 

### Relacionamento OneToOne

```
 @OneToOne(() => Address, (address) => address.user)
  address: Address;  
```

```
  @OneToOne(() => User, (user) => user.address)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user?: User;
```



### Relacionamento ManyToOne

```
@ManyToOne(() => City, (city) => city.address, {
  eager: true,
})
@JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
city: City;
```

```
@OneToMany(() => Address, (address) => address.city)
address: Address[];
```



### Carregamento Eager
As relações Eager são carregadas automaticamente cada vez que você carrega entidades do banco de dados

```
@ManyToOne(() => City, (city) => city.address, {
    eager: true,
})

```

### Carregamento Lazy (Default)
Entidades em relações Lazy são carregadas assim que você as acessa. Essas relações devem ter Promise como tipo - você armazena seu valor em uma promessa e, quando as carrega, uma promessa também é retornada

```
@ManyToOne(() => City, (city) => city.address)
```


## Funções repository

### FindOne :: Definir propriedades que serão retornada
```
const user = await this.repository.findOne({
  where: {
    id: id,
  },
  select: {
    id: true,
    name: true,
    email: true,
    phone: true,
    cpf: true,
  }, 
});
```

### FindOne (Definir relacionamento que será retornado)
```
const user = await this.repository.findOne({
 where: {
    id: id,
  },
  select: {
    id: true,
    name: true,
    email: true,
    phone: true,
    cpf: true,
  },
  relations: {
    address: {
      city: {
      state: true,
      },
    },
  },
});
```

### Create
```
const user =  await this.repository.save(data);

```