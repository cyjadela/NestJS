@Get()
@Role("admin")
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
findAll(): Promise<User[]> {
  return this.userService.findAll();
}