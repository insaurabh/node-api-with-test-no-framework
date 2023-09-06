export default class HeroService {
  constructor({ heroService }) {
    this.heroService = heroService;
  }

  find() {
    return this.heroService.find();
  }
  create(data) {
    return this.heroService.create(data);
  }
}
