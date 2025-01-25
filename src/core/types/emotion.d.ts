// emotion.d.ts
import '@emotion/react';
import {AppTheme} from '@/shared/styles/themes';


declare module '@emotion/react' {
    export interface Theme extends AppTheme {
    }
}
