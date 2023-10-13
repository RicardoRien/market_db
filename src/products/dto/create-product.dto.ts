import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";
import { ProductType } from "src/utils/constants";

export class CreateProductDto {
  @ApiProperty({ example: 'Aston Martin DB5' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 90000, default: 0 })
  @IsOptional()
  @IsPositive()
  price?: number;

  @ApiProperty({ example: 'is a British grand tourer (GT) produced by Aston Martin and designed by Italian coachbuilder Carrozzeria Touring Superleggera.[4] Originally produced from 1963 to 1965.' })
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiProperty({ example: 'aston-martin-db5' })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({ example: 5, default: 0 })
  @IsOptional()
  @IsInt()
  @IsPositive()
  stock?: number;

  @ApiProperty({ example: ['Car', 'Luxury', 'James Bond'] })
  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  tags?: string[];

  @ApiProperty({ example: 'cars' })
  @IsOptional()
  @Transform(({ value }) => ("" + value).toLowerCase())
  @IsEnum(ProductType)
  type?: ProductType;

  @ApiProperty({ example: ['https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/50585/nissa-350z-tokyo-drift-1.jpg'] })
  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  images?: string[];
}
