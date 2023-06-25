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
## Comandos
### Criar Migrations
```
typeorm migration:create ./src/typeorm/migration/create_table_address
```

## Relacionamentos

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

## Funções repository

### FindOne :: Definir propriedades que será retornada
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
  relations: ['address'],
});
```

### Create
```
const user =  await this.repository.save(data);

```