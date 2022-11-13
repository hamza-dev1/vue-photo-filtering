export class FiltersService {
  static filters = [
    {
      name: "brightness",
      min: 0,
      max: 150,
      value: 100,
      unit: "%",
    },
    {
      name: "contrast",
      min: 0,
      max: 250,
      value: 100,
      unit: "%",
    },
    {
      name: "grayscale",
      min: 0,
      max: 100,
      value: 0,
      unit: "%",
    },
    {
      name: "hue-rotate",
      min: 0,
      max: 360,
      value: 0,
      unit: "deg",
    },
    {
      name: "invert",
      min: 0,
      max: 100,
      value: 0,
      unit: "%",
    },
    {
      name: "saturate",
      min: 0,
      max: 250,
      value: 100,
      unit: "%",
    },
    {
      name: "sepia",
      min: 0,
      max: 100,
      value: 0,
      unit: "%",
    },
  ];

  static getAllFilters() {
    return this.filters;
  }
}
