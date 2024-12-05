import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_august_project_2024' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_august_project_2024');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('This is App Component');
  });
 
});

it('should test addition function',() =>
{
const fixture = TestBed.createComponent(AppComponent);
fixture.detectChanges();
const app = fixture.componentInstance;
app.addNumbers(10,20);
expect(app.addresult).toBe(30);
});
it('should return multiplication of numbers',() =>
{
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const app = fixture.componentInstance;
  expect(app.multiplication(5,6)).toBe(30);
});
it('should validate the number is even', () =>
{
const fixture = TestBed.createComponent(AppComponent);
fixture.detectChanges();
const app =fixture.componentInstance;
expect(app.isNumberEven(6)).toBe('even');
expect(app.isNumberEven(5)).not.toBe('even')
expect(app.isNumberEven(7)).not.toBe('even')
expect(app.isNumberEven(2)).not.toBe('odd');
})
it('should validate the addition of new car',() =>
{
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const app =fixture.componentInstance;
  expect(app.cars).toBeDefined();
  expect(app.cars.length).toBe(2);
  expect(app.cars).toEqual(['Tata','Maruti']);
  expect(app.cars).toContain('Tata');
  app.addnewcar('Honda');
  expect(app.cars.length).toBe(3);
  expect(app.cars).toContain('Honda');
  expect(app.cars).not.toContain('BMW');
  
});