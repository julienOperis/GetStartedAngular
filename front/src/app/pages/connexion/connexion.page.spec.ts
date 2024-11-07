import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnexionComponent} from './connexion.page';
import { InscriptionComponent} from '../inscription/inscription.page';

describe('ConnexionComponent', () => {
  let inscription:  InscriptionComponent
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
