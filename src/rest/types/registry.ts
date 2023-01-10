import type {Empty} from '../../util/types.ts';
import type {Endpoint} from '../endpoints.ts';

export type RegistryEndpoints =
	| Endpoint<'DELETE', '/v1/registry/images/:image', Empty>
	| Endpoint<'GET', '/v1/registry/images', {images: string[]}>
	| Endpoint<
			'GET',
			'/v1/registry/images/:image/manifests',
			{
				manifests: {
					digest: {
						digest: string;
						size: number;
						uploaded: string;
					};
					tag: string | null;
				}[];
			}
	  >;
