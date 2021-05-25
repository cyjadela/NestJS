@Module({
    imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
      TypeOrmModule.forFeature([User])],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
  })
  export class AuthModule {}