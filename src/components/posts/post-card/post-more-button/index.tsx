import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PostData } from '@/lib/types';
import { MoreHorizontalIcon, Trash2Icon } from 'lucide-react';
import { FC, useState } from 'react';
import { DeletePostDialog } from '../../delete-post-dialog';

type Props = {
	post: PostData;
	className?: string;
};

export const PostMoreButton: FC<Props> = ({ post, className }) => {
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button size="icon" variant="ghost" className={className}>
						<MoreHorizontalIcon className="size-5 text-muted-foreground" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent>
					<DropdownMenuItem onClick={() => setShowDeleteDialog(true)}>
						<span className="flex items-center gap-3 text-destructive">
							<Trash2Icon className="size-4" />
							Delete
						</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<DeletePostDialog post={post} open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} />
		</>
	);
};
