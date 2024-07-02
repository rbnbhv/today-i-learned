# Removing a folder from folder

- You can use like:
```
/*
         * delete all product media
         */
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('entity', 'product'));
        $criteria->addAssociation('folder');
        $criteria->setLimit(1);
        $defaultFolder = $this->mediaDefaultFolderRepository->search($criteria, $this->context)->first();

        $mediaCriteria = new Criteria();
        $mediaCriteria->addFilter(new EqualsFilter('mediaFolderId', $defaultFolder->getFolder()->getId()));
        $mediaIds = $this->mediaRepository->search($mediaCriteria, $this->context)->getIds();

        foreach ($mediaIds as $mediaId) {
            try {
                $this->mediaRepository->delete([['id' => $mediaId]], $this->context);
            } catch (\Exception) {
            }
        }
```


## 2nd way

- You can do it via admin and select first one, scroll to the end, hold shift and select the last one - and remove them
