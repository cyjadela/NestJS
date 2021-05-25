@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
  })
  export class UserModule {}