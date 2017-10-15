import { ProfileEffects } from './profile.effects';
import { ModuleWithProviders } from '@angular/core/src/core';
import { EffectsModule } from '@ngrx/effects';

export const AllEffects: ModuleWithProviders[] = [

  //To register the effects  at the application level
  EffectsModule.forRoot([
    ProfileEffects
    ])
]