import { CreateNftCollectionDto } from '@dtos/nft/create-colletion.dto';
import { UpdateNftCollectionDto } from '@dtos/nft/update-collection.dto';
import { INftCollection } from '@interfaces/nft.collection.interface';
import CollectionService from '@services/nft.service';
import { IStandardResponse, SendApiResponse } from '@utils/api.response';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Put,
  Route,
  SuccessResponse,
  Tags,
  Security,
} from 'tsoa';

@Tags('Collections')
@Route('collections')
export class NftCollectionRouter extends Controller {
  private collectionService = new CollectionService();

  /**
   * @summary Create nft collection
   */
  @Security('jwt', ['org'])
  @SuccessResponse('201')
  @Post()
  async createNftCollection(
    @Body() body: CreateNftCollectionDto,
  ): Promise<IStandardResponse<INftCollection>> {
    const collection = await this.collectionService.create(body);
    return SendApiResponse('collection created', collection);
  }

  /**
   * @summary Generate nft metadata
   */
  @Security('jwt', ['org'])
  @SuccessResponse('201')
  @Post('metadata/generate')
  async generateNftMetadata(
    @Body() body: UpdateNftCollectionDto,
  ): Promise<IStandardResponse<{ ipfsPath: string; videos: Array<any> }>> {
    const metadata = await this.collectionService.generateMetadata(body);
    return SendApiResponse('metadata generated', metadata);
  }

  /**
   * @summary  Update nft collection
   */
  @Security('jwt', ['org'])
  @SuccessResponse('201')
  @Put('{collectionId}')
  async updateNftCollection(
    @Path() collectionId: string,
    @Body() body: UpdateNftCollectionDto,
  ): Promise<IStandardResponse<INftCollection>> {
    const collection = await this.collectionService.update(collectionId, body);
    return SendApiResponse('collection updated', collection);
  }

  /**
   * @summary  Get all nft collections
   */
  @SuccessResponse('200')
  @Get()
  async getAllCollections(): Promise<IStandardResponse<Array<INftCollection>>> {
    const collections = await this.collectionService.getAll();
    return SendApiResponse('collections fetched', collections);
  }

  /**
   * @summary  Get Nft collection by id
   */
  @SuccessResponse('200')
  @Get('{collectionId}')
  async getNftCollectionById(
    @Path() collectionId: string,
  ): Promise<IStandardResponse<INftCollection>> {
    const collection = await this.collectionService.get(collectionId);
    return SendApiResponse('collection fetched', collection);
  }

  /**
   * @summary  Get Nft collections by organization
   */
  @SuccessResponse('200')
  @Get('organization/{organizationId}')
  async getAllOrganizationNft(
    @Path() organizationId: string,
  ): Promise<IStandardResponse<Array<INftCollection>>> {
    const collections =
      await this.collectionService.findAllNftForOrganization(organizationId);
    return SendApiResponse('collections fetched', collections);
  }
}
