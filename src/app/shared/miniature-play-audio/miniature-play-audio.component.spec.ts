import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiniaturePlayAudioComponent } from './miniature-play-audio.component';

describe('MiniaturePlayAudioComponent', () => {
  let component: MiniaturePlayAudioComponent;
  let fixture: ComponentFixture<MiniaturePlayAudioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturePlayAudioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiniaturePlayAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
