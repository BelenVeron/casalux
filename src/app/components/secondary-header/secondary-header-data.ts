import { ConfigButtonStep } from "src/app/models/interfaces/config-button-step";

export const CONFIG_BUTTONS_STEP: ConfigButtonStep[] = [
    {
      src: '\\assets\\img\\closets\\icon\\form.svg',
      activeClass: '',
      text: 'Form',
      complete: false,
      left: false,
      right: true,
      route: 'starting-closet'
    },
    {
      src: '\\assets\\img\\closets\\icon\\finishes.svg',
      activeClass: '',
      text: 'Finishes',
      complete: false,
      left: true,
      right: true,
      route: 'master-closet'
    },
    {
      src: '\\assets\\img\\closets\\icon\\dimensions.svg',
      activeClass: '',
      text: 'Dimensions',
      complete: false,
      left: true,
      right: true,
      route: 'dimensions'
    },
    {
      src: '\\assets\\img\\closets\\icon\\module.svg',
      activeClass: '',
      text: 'Module',
      complete: false,
      left: true,
      right: true,
      route: 'module'
    },
    {
      src: '\\assets\\img\\closets\\icon\\accessories.svg',
      activeClass: '',
      text: 'Accessories',
      complete: false,
      left: true,
      right: false,
      route: 'accesories'
    },
  ]
