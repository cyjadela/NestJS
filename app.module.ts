@Module({
    imports: [TypeOrmModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {
    constructor(private connection: Connection){}
  }